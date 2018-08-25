package br.com.donizete.taskapi.service;

import java.util.List;

import br.com.donizete.taskapi.model.Task;

public interface TaskService {

    Task create(Task task);

    Task delete(int id);

    List<Task> findAll();

    Task findById(int id);

    Task update(Task task);
}
