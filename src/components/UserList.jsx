import React, { useState, useEffect, Fragment, useRef } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
import { useSelector, useDispatch } from "react-redux";
import { changeUserName } from "../actions/userActions";
import { setUsersAction } from "../actions/userActions";
import Popup from "./Popup";
import { Dialog, Transition } from "@headlessui/react";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState({});
  const reduxUsers = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    let allCharacters = [];

    let response = await axios.get("https://swapi.dev/api/people");
    let data = response.data.results;
    allCharacters = [...allCharacters, ...data];

    while (response.data.next) {
      response = await axios.get(response.data.next);
      data = response.data.results;
      allCharacters = [...allCharacters, ...data];
    }
    setUsers(allCharacters);
    dispatch(setUsersAction(allCharacters));
  };

  useEffect(() => {
    fetchUsers();
  }, [dispatch]);

  const changeNameFunc = (idx, newName) => {
    dispatch(changeUserName(idx, newName)); // Redux store'daki karakterin ismini değiştir
  };
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = (idx) => {
    setShowPopup(true);
    setSelectedIdx(idx);
    setName("");
  };
  const handlePopupSubmit = (idx, newName) => {
    changeNameFunc(idx, newName);
    setShowPopup(false);
    setName("");
  };
  const cancelButtonRef = useRef(null);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="user-list">
      <ul>
        {reduxUsers.map((user, idx) => (
          <li key={idx}>
            <SingleUser idx={idx} user={user} key={idx} />
            <button onClick={() => handleShowPopup(idx)}>Change Name</button>
          </li>
        ))}
      </ul>

      <Transition.Root show={showPopup} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShowPopup}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-8 text-gray-900"
                        >
                          Change name
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                            <input
                              type="text"
                              name="newName"
                              id="newName"
                              value={name}
                              onChange={handleChange}
                              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-7 ml-12"
                              placeholder="Enter a new name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                      onClick={() => handlePopupSubmit(selectedIdx, name)}
                    >
                      Change
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setShowPopup(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
export default UserList;
