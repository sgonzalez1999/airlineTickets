package com.solera.booking.userbooking.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

	
	String user = "pepe";
	
	
	@GetMapping("/{name}")
	public ResponseEntity<String> sayHi(@PathVariable String name) {
		System.out.println("entrada " + name);
		if(user.equals(name)) {
			return new ResponseEntity<>("Hi User", HttpStatus.OK);
		}
		return new ResponseEntity<>("OH NOOOOOO", HttpStatus.NOT_FOUND);
		
	}
}
