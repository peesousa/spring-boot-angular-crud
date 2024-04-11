package br.com.peesousa.apispring.controle;

import br.com.peesousa.apispring.modelo.Cliente;
import br.com.peesousa.apispring.repositorio.Repositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class Controle {

    @Autowired
    private Repositorio repositorio;

    @PostMapping("/")
    public Cliente cadastrar(@RequestBody Cliente cliente){
        return repositorio.save(cliente);
    }

    @GetMapping("/")
    public Iterable<Cliente> selecionar(){
        return repositorio.findAll();
    }

    @PutMapping("/")
    public Cliente editar(Cliente cliente){
        return repositorio.save(cliente);
    }

    @DeleteMapping("/{codigo}")
    public void excluir(@PathVariable Long codigo){
        repositorio.deleteById(codigo);
    }
}
