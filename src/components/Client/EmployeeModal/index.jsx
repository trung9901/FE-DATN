import React, { useEffect } from "react";
import { Button, Modal, Radio } from "antd";
import { useState } from "react";
import useBooking from "../../../hooks/use-booking";
import useEmployees from "../../../hooks/use-employees";
import useSWR from "swr";
import moment from "moment";

const EmployeeModal = (props) => {
  const { data: bookings, getEmployeeByBookingDays } = useBooking();
  const { data: employees, error } = useEmployees();
  // const { data: employees, error } = useSWR(`http://localhost:5000/api/employees/${id}`);
  // const data = getEmployeeByBookingDays('1663806900', '632a7d5b05c4f6b245410bdb')

  console.log(employees.filter((item) => item._id == props.id));

  const data = employees.filter((item) => item._id === props.id);

  // -------------------------------
  const opens = props.open;
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
    getEmployeeByBookingDays();
  };
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [shiflt, setShiflt] = useState();
  const onChange = (e) => {
    setShiflt(e.target.value);
    // console.log(`radio checked: ${e.target.value}`);
  };
  const handleOk = () => {
    console.log(shiflt);
    // props.onAdd(shiflt);
  };
  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setOpen(false);
  };

  if (error) return <div>failed to load</div>;
  if (!employees) return <div>Loading...</div>;
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <div className="">
          {data?.map((item) => (
            <div className="" key={item._id}>
              {/* <div className="">{item.name}</div>
              <div className="">{item.email}</div>
              <div className="">{item.phoneNumber}</div>
              <div className="">{item.avatar}</div> */}
              <div className="">
                {item.timeWork?.map((item2) => (
                  <div className="" key={item2._id}>
                    <Radio.Group onChange={onChange} defaultValue="a">
                      <Radio.Button value={item2.shiftId}>
                        {item2.shiftId}
                      </Radio.Button>
                    </Radio.Group>
                    {/* <div className="">
                      {item2.date}-----{moment(item2.date).format("L")}
                    </div>
                    <div className="">{item2.shiftId}</div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default EmployeeModal;
