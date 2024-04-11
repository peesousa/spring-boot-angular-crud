package br.com.peesousa.apispring.repositorio;

import br.com.peesousa.apispring.modelo.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repositorio extends CrudRepository<Cliente, Long> {

}