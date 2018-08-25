package br.com.donizete.taskapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.donizete.taskapi.model.Task;
import br.com.donizete.taskapi.repository.TaskRepository;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository repository;

    @Override
    public Task create(Task task) {
        return repository.save(task);
    }

    @Override
    public Task delete(int id) {
        Task task = findById(id);
        if(task != null){
            repository.delete(task);
        }
        return task;
    }

    @Override
    public List<Task> findAll() {
        return repository.findAll();
    }

    @Override
    public Task findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public Task update(Task task) {
        return repository.save(task);
    }
}
