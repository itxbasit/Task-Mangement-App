// Drawer.js
import React from 'react';
import AddButton from './AddBtn';
import TaskDescription from './form';
import EditTask from '../MainFrame/edit';

const Drawer = ({ isOpen, onClose, value, id, email, title, desc, status, date}) => {
  return (
    <div className={`drawer drawer-end ${isOpen ? 'active' : ''}`}>
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={onClose} />
      {
        value !== "edit" ?
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className='btn1'>Add Tasks</label>
          </div>:null
      }

      {
        value != "edit" ?
          <div className={`drawer-side ${isOpen ? 'active' : ''}`} >
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay" onClick={onClose}></label>
            <ul className="menu p-4 w-2/4 min-h-full z-50 bg-white text-base-content" style={{ zIndex: "99999" }}>
              <div>
                <AddButton />
              </div>
              <div style={{ marginBottom: "6rem" }}>
                <div>
                  <TaskDescription />
                </div>
              </div>
            </ul>
          </div> :

          <div className={`drawer-side ${isOpen ? 'active' : ''}`} >
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay" onClick={onClose}></label>
          <ul className="menu p-4 w-2/4 min-h-full z-50 bg-white text-base-content" style={{ zIndex: "99999" }}>
            <div>
              <AddButton />
            </div>
            <div style={{ marginBottom: "6rem" }}>
              <div>
                <EditTask id={id} email={email} desc={desc} date={date} title={title} status={status} />
              </div>
            </div>
          </ul>
        </div>
      }

    </div>
  );
};

export default Drawer;
