import api from "./gorestAPI";

class UserService {
  buscarTodos() {
    return api.get("/users");
  }

  buscarPorId(id) {
    return api.get(`/users/${id}`);
  }

  crear(data) {
    return api.post("/users", data);
  }

  modificar(id, data) {
    return api.put(`/users/${id}`, data);
  }

  eliminar(id) {
    return api.delete(`/users/${id}`);
  }

}

export default new UserService();