import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { searchUsers } from "../../services";
import { Container, Box, Typography } from "@mui/material";
import CustomCard from "../../components/CustomCard";

const Users = () => {
  const { username } = useParams();

  const history = useNavigate();

  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    const data = await searchUsers(username);
    setUserList(data.items);
    console.log(data);
  };

  const handleClick = (username) => {
    history(`/user/${username}`);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Box>
        <Typography variant="h6">
          Resultado de busqueda del usuario :@{username}
        </Typography>
      </Box>
      <Box>
        {userList.lenght > 0 &&
          userList.map((user, index) => (
            <CustomCard key={index} handleClick={handleClick} user={user} />
          ))}
      </Box>
    </Container>
  );
};

export default Users;
