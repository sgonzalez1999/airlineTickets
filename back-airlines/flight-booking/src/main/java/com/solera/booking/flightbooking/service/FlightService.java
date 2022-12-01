package com.solera.booking.flightbooking.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solera.booking.flightbooking.model.Flight;
import com.solera.booking.flightbooking.repo.FlightData;

@Service
public class FlightService {
	
	@Autowired
	FlightData flightData=new FlightData();
	
	public List<Flight> getAllFlights() throws Exception{
		return flightData.getAllFlights();
	}
	
	public List<Flight> getFilteredFlights(Flight f) {
		return this.flightData.getFlightsByFilter(f);
	}


}
