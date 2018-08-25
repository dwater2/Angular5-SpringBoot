package br.com.donizete.taskapi.repository;

import org.springframework.data.repository.Repository;

import br.com.donizete.taskapi.model.Task;

import java.util.List;

public interface TaskRepository extends Repository<Task, Integer> {

    void delete(Task task);

    List<Task> findAll();

    Task findOne(int id);

    Task save(Task task);
}
