import React from "react";
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
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const options = [
  {
    label: "Apple",
    value: "Apple",
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
const onChange1 = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
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
// ------------------------------------------------------------------------------------------------
const BookingPage = () => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+84</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
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
                  name="phone"
                  label="Số điện thoại"
                  rules={[
                    {
                      required: true,
                      type: "phone",
                      message: "Please input your phone number!",
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

                {/* Ghi chú */}
                <Form.Item name={["user", "introduction"]} label="Ghi chú">
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
    </div>
  );
};

export default BookingPage;
