package com.solera.booking.flightbooking.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.solera.booking.flightbooking.model.Flight;
import com.solera.booking.flightbooking.service.FlightService;

@RestController
@RequestMapping("/flights")
@CrossOrigin
public class FlightController {
	
	@Autowired
	FlightService service;


	//Flight flight = new Flight("Madrid", "Londres", "Iberia", false, new Date(2022, 12, 1), false);
	
	
	@GetMapping()
	public ResponseEntity<String> fetchAllFlights(@RequestParam Map<String, String> s) throws Exception{
		//List<Flight> listOfTransactions = service.getAllFlights();
		for (Map.Entry<String, String> entry : s.entrySet()) {
			System.out.println(entry.getValue());
			
		}
		
		
		//List<Flight> filteredFlightList = service.getFilteredFlights(flight);
		return new ResponseEntity<>("", HttpStatus.OK);
	}

}
