package ema.belt.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import ema.belt.models.Course;
import ema.belt.services.CourseService;



@Controller
public class CourseController {

    @Autowired CourseService courseService;



    // Create course
    @GetMapping("/classes/new")
    public String newCourse(@ModelAttribute("course") Course course){
        return "classes/new.jsp";
    }
    @PostMapping("/classes/create")
    public String createCourse(@Valid @ModelAttribute("course") Course course, BindingResult result){
        if(result.hasErrors()){
            return "classes/new.jsp";
        }
        else{
            courseService.createCourse(course);
            return "redirect:/classes";
        }
    }


    //! Read ALL
    @GetMapping("/classes")
    public String courses(Model model, HttpSession session){
        if(session.getAttribute("userId") == null){
            return "redirect:/logout";
        }
        List <Course> courses = courseService.getAllCourses();
        model.addAttribute("courses", courses);
        return "classes/classesPage.jsp";
    }

    // Read One
    @GetMapping("/classes/{id}")
    public String show(@PathVariable("id")Long id, Model model){
        Course course = courseService.getOneCourse(id);
        model.addAttribute("course", course);
        return "classes/show.jsp";
    }





    // Update
    @GetMapping("/classes/{id}/edit")
    public String edit(@PathVariable("id")Long id, Model model){
        Course course = courseService.getOneCourse(id);
        model.addAttribute("course", course);
        return "classes/edit.jsp";
    }



    @PutMapping("/classes/{id}")
    public String update(@Valid @ModelAttribute("course")Course course, BindingResult result){
        if(result.hasErrors()){
            return "classes/edit.jsp";
        }
        else{
            courseService.updateCourse(course);
            return "redirect:/classes";
        }
    }

    // Delete
    @DeleteMapping("/classes/{id}")
    public String destroy(@PathVariable("id")Long id, HttpSession session){
        courseService.destroyClass(id);
        return "redirect:/classes";
    }


}
