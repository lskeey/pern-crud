import { Button, Label, Modal, TextInput } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";

const EditModal = ({ todo }) => {
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState(todo.todo_description);

  const onCloseModal = () => {
    setOpenModal(false);
    setDescription(todo.todo_description);
  }

  const updateTodo = async(id) => {
    try {
      const body = { 'todo_description': description }
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      window.location = '/'
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Edit</Button>
      <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <TextInput
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="w-full flex justify-end gap-2">
              <Button color="failure" onClick={onCloseModal}>Cancel</Button>
              <Button onClick={() => updateTodo(todo.todo_id)}>Submit</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

EditModal.propTypes = {
  todo: PropTypes.shape({
    todo_id: PropTypes.number.isRequired,
    todo_description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditModal