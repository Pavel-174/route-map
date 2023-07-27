import React, { useState, useEffect } from "react";
import { Divider, Table as RadioTable } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { routerActions } from "../../features/router/routerSlice";
import {
  requestListActions,
  selectListRequests,
} from "../../features/requestList/requestListSlice";

const Table = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const requests = useSelector(selectListRequests);

  useEffect(() => {
    dispatch(requestListActions.fetchRequestList());
  }, [dispatch]);

  const columns = [
    {
      title: " ",
      dataIndex: "key",
      render: (text, record) => {
        return <span>{record.key}</span>;
      },
    },
    {
      title: "Routes",
      dataIndex: "name",
      render: (text, record) => {
        return <p>{text}</p>;
      },
    },
    {
      title: "Point 1",
      dataIndex: "original",
      render: (text, record) => {
        return (
          <span>{record.original}</span>
        );
      },
    },
    {
      title: "Point 2",
      dataIndex: "destination",
      render: (text, record) => {
        return (
          <span>{record.destination}</span>
        );
      },
    },
  ];

  return (
    <>
      <RadioTable
        pagination = {false}
        onRow={(record, index) => {
          return {
            onClick: () => {
              dispatch(
                routerActions.fetchRoute({
                  original: record.original,
                  destination: record.destination,
                  key: record.key,
                })
              );
              setSelectedRowKeys([index + ""]);
            },
          };
        }}
        rowSelection={{
          type: 'radio',
        }}
        columns={columns}
        dataSource={requests}
      >
      </RadioTable>
      <Divider />
    </>
  );
};

export default Table;
