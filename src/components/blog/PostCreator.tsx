import { useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai/index";
import { v4 as uuidv4 } from "uuid";

const HeaderCard = () => {
  return <div>lkasdfjalksdf</div>;
};

interface Content {
  id: string;
  value: string;
  type: string;
}

const postContent: Content[] = [
  // {
  //   id: 'cato',
  //   data: {},
  //   type: "header"
  // },
];

const contentTypes = ["header", "text", "image", "code block"];

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
  const headerRef = useRef(undefined);
  const addObject = () => {
    switch (selected) {
      case "header":
        addHeader();
        break;
    }
  };

  const addHeader = () => {
    headerRef.current.value
    let data = {
      id: uuidv4(),
      value:  headerRef.current.value,
      type: "header",
    };
    updateContent([...content, data]);
    console.log(content);
    setOpen(false);
  };

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
                    placeholder="Type content here..."
                    className="input-field w-full min-h-[300px]"
                  />
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

export default function PostCreator() {
  const [content, updateContent] = useState(postContent);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(content);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateContent(items);
  }

  return (
    <>
      <div className="container-test pt-32 min-h-screen">
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
                className="border-t-2 border-b-2 border-black/20  text-white transition-all duration-300 ease-out"
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
                          <div className="characters-thumb flex space-x-8 items-center drop-shadow-xl">
                            <p>{index + 1}</p>
                            <p className="capitalize">{type}</p>
                            <p className="relative left-48">{value}</p>
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
