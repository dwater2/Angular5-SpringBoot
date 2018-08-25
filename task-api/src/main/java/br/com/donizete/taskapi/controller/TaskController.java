package br.com.donizete.taskapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.com.donizete.taskapi.model.Task;
import br.com.donizete.taskapi.service.TaskService;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/api"})
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public Task create(@RequestBody Task task){
    	task.setCreated(new Date());
        return taskService.create(task);
    }

    @GetMapping(path = {"/{id}"})
    public Task findOne(@PathVariable("id") int id){
        return taskService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Task update(@PathVariable("id") int id, @RequestBody Task task){
        task.setId(id);
        task.setModified(new Date());
        return taskService.update(task);
    }

    @DeleteMapping(path ={"/{id}"})
    public Task delete(@PathVariable("id") int id) {
        return taskService.delete(id);
    }

    @GetMapping
    public List<Task> findAll(){
        return taskService.findAll();
    }
}
