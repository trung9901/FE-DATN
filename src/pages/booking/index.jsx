import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Checkbox,
  DatePicker,
  Space,
} from "antd";
import moment from "moment";

import useBooking from "../../hooks/use-booking";
import Loading from "../../components/Client/loading";
import useEmployees from "../../hooks/use-employees";

import EmployeeModal from "../../components/Client/EmployeeModal"
// ------------------------------------------------------------------------------------------------
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { Option } = Select;
const validateMessages = {
  required: "${label} không được để trống!",
  types: {
    email: "${label} không đúng định dạng!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const options = [
  {
    label: "qua tao",
    value: "qua tao",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
  },
];
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
};

const { RangePicker } = DatePicker;

const range = (start, end) => {
  const result = [];

  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="84">+84</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);
// ------------------------------------------------------------------------------------------------




const BookingPage = () => {

  const { data: employees, error } = useEmployees();


  const onSubmit = (data) => {
    console.log("submit", data.user.name);
  };
  const onChange1 = (value, dateString) => {
    // console.log("Selected Time: ", value);
    // console.log("Formatted Selected Time: ", dateString);
    // console.log(moment(dateString).format("X"));
    // const query = moment(dateString).format("X");
    // console.log(a);
    // const a = getEmployeeByBookingDays(1063040400);
    // setShift(a);
    // console.log(shift);
  };
  // ------------------------------------------------------------------------------------------------
  const [id, setId] = useState("")
  const [open, setOpen] = useState(false)
  const onChangeSelected = (value) => {
    setId(value)
  }

  // ------------------------------------------------------------------------------------------------
  useEffect(() => {
    // console.log(employees);
    // const a = employees.filter((item) => {
    //   item.date == 1063040400;
    // });
    console.log(employees);
  }, [employees]);








  if (error) return <div>failed to load</div>;
  if (!employees)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className="my-10 ">
      <div className="w-[700px] m-auto">
        <div className="border border-[#00502B] rounded-lg  ">
          <h3 className="text-2xl font-bold bg-[#00502B] text-white p-3 rounded-t-lg">
            Đặt lịch
          </h3>
          <div className="m-5">
            <div className="mx-5">
              <Form
                {...layout}
                name="nest-messages"
                validateMessages={validateMessages}
                initialValues={{
                  prefix: "+84",
                }}
                onFinish={onSubmit}
              >
                {/* Tên */}
                <Form.Item
                  name={["user", "name"]}
                  label="Tên "
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                {/* Tuổi */}
                <Form.Item
                  name={["user", "age"]}
                  label="Tuổi"
                  rules={[
                    {
                      type: "number",
                      min: 0,
                      max: 99,
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>

                {/* Email */}
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                {/* SĐT */}
                <Form.Item
                  name={["user", "phone"]}
                  label="Số điện thoại"
                  rules={[
                    {
                      required: true,
                      // type: "phone",
                      // message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>

                {/* Các dịch vụ */}
                <Form.Item
                  name={["user", "oders"]}
                  label="Lựa chọn dịch vụ"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Checkbox.Group options={options} onChange={onChange} />
                </Form.Item>

                {/* Chọn ngày đặt lich */}
                <Form.Item
                  name={["user", "date"]}
                  label="Chọn ngày"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <DatePicker
                    disabledDate={disabledDate}
                    onChange={onChange1}
                    onOk={onOk}
                  />
                </Form.Item>

                {/* chọn nhân viên */}
                <Form.Item
                  label="Chọn nhân viên"
                  name={["user", "employees"]}
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Select onChange={onChangeSelected}>
                    {employees?.map((item) => (
                      <Select.Option value={item._id} key={item.name} >
                        {item.name}
                        {/* <div className="" onClick={() => { setOpen(true) }}>{item.name}</div> */}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                {/* chọn ca  */}
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} >
                  <EmployeeModal id={id} open={open} />
                </Form.Item>
                {/* Ghi chú */}
                <Form.Item name={["user", "note"]} label="Ghi chú">
                  <Input.TextArea />
                </Form.Item>

                {/* button */}
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Đặt lịch
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default BookingPage;
