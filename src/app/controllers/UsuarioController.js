import Usuario from "../model/Usuario.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class UsuarioController {
  async findAll(request, response) {
    try {
      const result = await UsuarioRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.id;
    try {
      const result = await UsuarioRepository.findById(id);
      if (!result) {
        response.json({ message: "ID not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }

  async create(request, response) {
    try {
      const exists = await UsuarioRepository.findByNome(
        request.body.nome
      );
      if (exists) {
        response.json({ message: "User already registered." });
      } else {
        try {
          const usuario = new Usuario(
            request.body.nome,
            request.body.idade,
            request.body.data,
            request.body.multiplayer
          );
          await UsuarioRepository.create(usuario);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }

  async updateById(request, response) {
    const id = request.params.id;
    try {
      const exists = await UsuarioRepository.findById(id);
      if (!exists) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const usuario = new Usuario(
            request.body.nome,
            request.body.idade,
            request.body.data,
            request.body.multiplayer
          );
          await UsuarioRepository.update(id, usuario);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }

  async deleteById(request, response) {
    const id = request.params.id;
    try {
      const exists = await UsuarioRepository.findById(id);
      if (!exists) {
        response.json({ message: "ID not found" });
      } else {
        await UsuarioRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }
}

export default new UsuarioController();
