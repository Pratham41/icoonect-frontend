import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "react-bootstrap";
import { listOfUsers } from "../redux/actions/user";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listOfUsers());
  }, [dispatch]);

  return (
    <Container fluid className="my-4">
      <h4 className="mb-4 text-center">All Users</h4>
      {error && <h4 className="text-center text-danger">{error}</h4>}
      {loading && <Loader />}
      <Table  bordered hover>
        <thead className="bg-dark text-light ">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
