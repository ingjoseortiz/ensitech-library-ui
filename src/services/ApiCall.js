import axios from "axios";

export function ApiCall(formData) {
  console.log(formData);
  const fetchData = async () => {
    const response = await axios
      .post("http://localhost:5146/api/user/login", {
        username: formData.username,
        password: formData.password,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return fetchData();
  // Empty dependency array means this effect will only run once, similar to componentDidMount in class components
}

export async function ApiBookCatalog() {
  const fetchData = async () => {
    return await axios
      .get("http://localhost:5146/api/books/all")
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };
  return await fetchData();
}

export async function ApiBookAdd(data) {
  const fetchData = async () => {
    let value = localStorage.getItem("token");
    console.log("TOKEN: " + value);

    const config = {
      headers: {
        ContentType: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    return await axios
      .post(
        "http://localhost:5146/api/books/add",
        {
          id: 1, //*
          title: data.title,
          author: data.author,
          genre: data.genre,
          inventoryDto: {
            Id: 1,
            bookId: 1,
            quantity: data.quantity,
          },
        },
        config
      )
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };
  return await fetchData();
}

export async function ApiRentBook(data) {
  const fetchData = async () => {
    let value = localStorage.getItem("token");
    console.log("TOKEN: " + value);

    const config = {
      headers: {
        ContentType: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    return await axios
      .patch(
        "http://localhost:5146/api/books/rent",
        {
          id: data.id,
        },
        config
      )
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };
  return await fetchData();
}

export async function ApiReturnBook(data) {
  const fetchData = async () => {
    let value = localStorage.getItem("token");
    console.log("TOKEN: " + value);

    const config = {
      headers: {
        ContentType: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    return await axios
      .patch(
        "http://localhost:5146/api/books/return",
        {
          id: data.id,
        },
        config
      )
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };
  return await fetchData();
}
