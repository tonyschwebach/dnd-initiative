import API from "../../utils/API";
import CharacterForm from "../CharacterForm/CharacterForm";
import React from "react";
import { Transition } from "@headlessui/react";

const NewCharacterModal = ({ NewCharacterModalOpen, handleClose }) => {
  // function to handle child form submit
  const saveNewCharacter = (e, charData) => {
    e.preventDefault();
    API.createCharacter(charData)
      .then((res) => handleClose())
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen  text-center sm:block sm:p-0">
        {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}

        <Transition
          show={NewCharacterModalOpen}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo=" opacity-100"
          leave="ease-in duration-200"
          leaveFrom=" opacity-100 "
          leaveTo=" opacity-0"
        >
          {/* {(ref) => ( */}
          <div
            // ref={ref}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          {/* )} */}
        </Transition>

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
        {/* <Transition
          show={NewCharacterModalOpen}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo=" opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        > */}
        {/* {(ref) => ( */}
        <div
          // ref={ref}
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="bg-white pt-5 ">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  New Character Form
                </h3>
              </div>
            </div>
            <CharacterForm
              handleClose={handleClose}
              handleSubmit={saveNewCharacter}
              formType="new"
            />
          </div>
        </div>
        {/* )} */}
        {/* </Transition> */}
      </div>
    </div>
  );
};

export default NewCharacterModal;
