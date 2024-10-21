package com.mk.todoapp.repository;

import com.mk.todoapp.entity.CompositeKey;
import com.mk.todoapp.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(exported = false)
public interface TaskRepository extends JpaRepository<Task, Long> {
//    Page<Task> getAllTasksPaged(Pageable pageable);

}
