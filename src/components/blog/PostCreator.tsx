import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Modal } from '@mui/material'
import { motion } from 'framer-motion'
import { AiOutlineClose } from "react-icons/ai/index"

const HeaderCard = () => {
  return (
    <div>lkasdfjalksdf</div>
  )
}

const postContent = [
  {
    id: 'cato',
    data: {}, 
    type: "header"
  },
]

const AddPostButton = () => {
  const [isOpen, setOpen] = useState(false)
  return ( 
    <>
      <AddPostModal {...{isOpen, setOpen}}/>
      <button onClick={() => setOpen(true)} className="button-style h-12">Add Content...</button>
    </>
  )
}

const AddPostModal = ({ isOpen, setOpen }) => {
  return (
    <Modal open={isOpen} className="z-[999]"> 
      <div className="w-full h-screen grid place-items-center">
        {isOpen && (
          <motion.div className="bg-[#403d39] border-[3px] shadow-xl border-black/20 rounded-xl py-2 px-4 relative w-[1200px] h-[600px]" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <button className="h-10 absolute right-2 aspect-square overflow-hidden grid place-items-center button-style" onClick={() => setOpen(false)}><AiOutlineClose /></button>
          </motion.div>
        )}
      </div>
    </Modal>
  )
}

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
        <h1 className="text-4xl py-4 text-white/70 font-serif">Content</h1>
        <AddPostButton />
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="border-t-2 border-b-2 border-black/20  text-white transition-all duration-300 ease-out" {...provided.droppableProps} ref={provided.innerRef}>
                {content.map(({id, type}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="py-4 px-2">
                          <div className="characters-thumb flex space-x-8 items-center drop-shadow-xl">
                            <p>{ index + 1 }</p>
                            <p className="capitalize">
                              { type }
                            </p>
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
    
  )
}
