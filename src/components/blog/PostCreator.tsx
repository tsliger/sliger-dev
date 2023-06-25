import { useEffect, useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ky from "ky";
import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai/index";
import { v4 as uuidv4 } from "uuid";
import { RiAddFill } from "react-icons/ri/index"
import { useStore } from "@nanostores/react";
import { jwtToken } from "../../stores/jwtStore";
import { RiLoader5Line } from "react-icons/ri"



const contentTypes = ["header", "text", "image", "code block"];
interface Content {
  id: string;
  value: string;
  type: string;
  meta: Object;
}

const postContent: Content[] = [];

const AddPostButton = ({ content, updateContent }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <AddPostModal {...{ isOpen, setOpen, content, updateContent }} />
      <button onClick={() => setOpen(true)} className="button-style h-12">
        Add Content...
      </button>
    </>
  );
};

const AddPostModal = ({ isOpen, setOpen, content, updateContent }) => {
  const [selected, setSelected] = useState(undefined);
  const [uploadedFile, setFile] = useState(undefined);
  const headerRef = useRef(undefined);
  const textRef = useRef(undefined);

  const addObject = () => {
    switch (selected) {
      case "header":
        addHeader();
        break;

      case "text":
        addText();
        break;
    }
  };

  const addImage = (file) => {
    let data = {
      id: uuidv4(),
      value: file.name,
      meta: { fileObject: file },
      type: 'image'
    }

    updateContent([...content, data])
    setOpen(false)
  }

  const addText = () => {
    let data = {
      id: uuidv4(),
      value: textRef.current.value,
      type: 'text'
    }

    updateContent([...content, data])
    setOpen(false)
  }

  const addHeader = () => {
    let data = {
      id: uuidv4(),
      value:  headerRef.current.value,
      type: "header",
    };
    updateContent([...content, data]);
    setOpen(false);
  };

  const updateFile = (e) => {
    addImage(e.target.files[0])
  }

  return (
    <Modal open={isOpen} className="z-[999]">
      <div className="w-full h-screen grid place-items-center backdrop-blur">
        {isOpen && (
          <motion.div
            className="bg-[#403d39] border-[3px] shadow-xl border-black/20 rounded-xl py-4 px-8 relative w-[800px] min-h-[600px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          >
            <button
              className="h-10 absolute right-2 top-2 aspect-square overflow-hidden grid place-items-center button-style"
              onClick={() => setOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <div className="w-full h-full text-white flex flex-col">
              <h1 className="text-xl font-serif opacity-70 mb-1 tracking-wider">
                Select Type
              </h1>
              <div className="flex space-x-4 h-16 py-2 w-3/4">
                {contentTypes &&
                  contentTypes.map((val, i) => (
                    <button
                      key={val}
                      onClick={() => setSelected(val)}
                      className={`bg-black/20 ${
                        selected === val
                          ? " border-[#FF6000]"
                          : "border-black/10"
                      }   border-2 active:scale-[0.95] px-8 font-mono cursor-pointer rounded-md shadow-lg hover:shadow-sm transition-all duration-300 h-full grid place-items-center`}
                    >
                      {val}
                    </button>
                  ))}
              </div>
              <h1 className="text-xl font-serif opacity-70  mt-3 tracking-wider">
                Input
              </h1>
              {selected === "header" && (
                <motion.div
                  className="my-4 flex-grow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <input
                    ref={headerRef}
                    placeholder="Header Text"
                    className="input-field w-96"
                  />
                </motion.div>
              )}
              {selected === "text" && (
                <motion.div
                  className="my-4 flex-grow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <textarea
                    ref={textRef}
                    placeholder="Type content here..."
                    className="input-field w-full min-h-[300px]"
                  />
                </motion.div>
              )}
              {selected === "image" && (
                <motion.div
                  className="my-4 flex-grow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <label htmlFor="filename" className='cursor-pointer text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none my-2 duration-150 transition grid-items-center'>Click To Add Image</label>
                  <input id="filename" type="file" name="filename" className="hidden" onChange={updateFile}></input>
                </motion.div>
              )}
            </div>
            <button
              onClick={addObject}
              disabled={selected === undefined}
              className="h-12 absolute right-2 bottom-2  overflow-hidden grid place-items-center button-style"
            >
              Add Content
            </button>
          </motion.div>
        )}
      </div>
    </Modal>
  );
};

const FixedSubmitButton = ({ startContentPost, postLoading }) => {
  return (
    <button disabled={postLoading} onClick={startContentPost} className="fixed z-[999] button-style h-12 text-lg px-8 bg-[#403d39] space-x-2 right-8 bottom-8 flex items-center">
      {postLoading && <RiLoader5Line className="animate-spin"/>}
      <p>Add</p><RiAddFill />
    </button>
  )
}

export default function PostCreator() {
  const [content, updateContent] = useState(postContent);
  const [data, setForm] = useState({
    title: '',
    excerpt: ''
  })
  const url = import.meta.env.PUBLIC_BACKEND_URL
  const $jwtToken = useStore(jwtToken)
  const [postLoading, setLoading] = useState(false)
  const [backgroundFile, setBgFile] = useState(undefined)

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(content);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateContent(items);
  }

  const postHeaderContent = async (data: any, i: Number) => {
    const res: any = await ky.post(`${url}/api/contents`, {
    json: {
      "data": {
        "type": 'header',
        "header": data.value,
        "order": i,
      }
    }, 
    headers: { Authorization: `Bearer ${$jwtToken}` },
    timeout: 99999
    }).json();

    return await res.data.id
  }

  const postTextContent = async (data: any, i: Number) => {
    const res: any = await ky.post(`${url}/api/contents`, {
    json: {
      "data": {
        "type": 'text',
        "content": data.value,
        "order": i,
      }
    }, 
    headers: { Authorization: `Bearer ${$jwtToken}` },
    timeout: 99999
    }).json();

    return await res.data.id
  }
  
  const postImageContent = async (data: any, i: Number) => {
    const imageData = data.meta.fileObject;
    const formData = new FormData()
    formData.append('files', imageData)

    var resp: any = await ky.post(`${url}/api/upload`, {body: formData, headers: { Authorization: `Bearer ${$jwtToken}` }}).json();
    
    if (resp && resp[0].id)
    {
      const photoId = resp[0].id;
      const res: any = await ky.post(`${url}/api/contents`, {
      json: {
        "data": {
          "type": 'image',
          "image": {
            "id": photoId
          },
          "order": i,
        }
      }, 
      headers: { Authorization: `Bearer ${$jwtToken}` },
      timeout: 99999
      }).json();

      return await res.data.id
    }
  }

  const postContentToServer = async (contentIds) => {
    const formData = new FormData()
    formData.append('files', backgroundFile)
    var resp = await ky.post(`${url}/api/upload`, {body: formData, headers: { Authorization: `Bearer ${$jwtToken}` }}).json();

    if (resp){
      const photoId = resp[0].id;
      const res: any = await ky.post(`${url}/api/posts`, {
        json: {
          "data": {
            "title": data.title,
            "excerpt": data.excerpt,
            "visible": true,
            "categories": {
                "id": 1
            },
            "author" : {
                "id": 1
            },
            "contents": contentIds,
            "featured_image": {
              "id": photoId
            }
          }
        }, 
        headers: { Authorization: `Bearer ${$jwtToken}` },
      }).json();

      setLoading(false)

      const slug = res.data.attributes.slug
      if (slug) {
        window.location.href = "/blog/" + slug;
      }
    }
  }

  const startContentPost = async () => {
    setLoading(true)
    let contentIds = await processContent()

    postContentToServer(contentIds)
  }

  const processContent = () => {
    let contentIds: number[] = []
    content.forEach(async (data, i) => {
      switch (data.type) {
        case "header":
          const res = await postHeaderContent(data, i);
          contentIds.push(res)
          break;
        
        case "text":
          const textRes = await postTextContent(data, i);
          contentIds.push(textRes)
          break;
        
        case "image":
          const imgRes = await postImageContent(data, i)
          contentIds.push(imgRes)
          break;
        
      }
    })

    return contentIds
  }

  return (
    <>
      <FixedSubmitButton {...{startContentPost, postLoading}}/>
      <div className="container-test pt-32 min-h-screen mb-32">
        <div className="mb-16 space-y-8 flex flex-col">
          <h1 className="text-4xl py-4 text-white/70 font-serif text-white font-semibold tracking-wider">
            Post Details
          </h1>
          <input onInput={(event: any) => {setForm({...data, title: event.target.value})}} className="input-field w-96" placeholder='Title'/>
          <textarea onInput={(event: any) => {setForm({...data, excerpt: event.target.value})}}  className="input-field w-96 min-h-[150px]" placeholder='Excerpt'/>
          <label htmlFor="file" className='cursor-pointer text-[#FFE6C7] w-48 h-48  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none my-2 duration-150 transition grid-items-center'>Click To Add Image</label>
          <input id="file" type="file" name="file" className="hidden" onChange={(e) => { setBgFile(e.target.files[0])} }></input>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl py-4 text-white/70 font-serif text-white font-semibold tracking-wider">
            Content
          </h1>
          <AddPostButton {...{ content, updateContent }} />
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="border-t-2  border-black/20  text-white transition-all duration-300 ease-out"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {content.map(({ id, type, value }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="py-4 px-2"
                        >
                          <div className="characters-thumb flex items-center drop-shadow-xl">
                            <p>{index + 1}</p>
                            <p className="capitalize ml-12">{type}</p>
                            <p className="relative left-48 overflow-hidden max-w-[500px]">{value}</p>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}
