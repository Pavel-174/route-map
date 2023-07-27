import React from "react";
import { Table as RadioTable } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { routerActions } from "../../features/router/routerSlice";
import {
  requestListActions,
  selectListRequests,
} from "../../features/requestList/requestListSlice";

const Table = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const requests = useSelector(selectListRequests);

  React.useEffect(() => {
    dispatch(requestListActions.fetchRequestList());
  }, [dispatch]);

  const columns = [
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
    <RadioTable
      onRow={(record, index, Radio) => {
        return {
          onClick: () => {
            dispatch(
              routerActions.fetchRoute({
                original: record.original,
                destination: record.destination,
              })
            );
            setSelectedRowKeys([index + ""]);
          },
        };
      }}
      columns={columns}
      dataSource={requests}
    ></RadioTable>
  );
};

export default Table;
