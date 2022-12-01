package com.solera.booking.flightbooking.repo;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

import java.util.*;

import com.solera.booking.flightbooking.model.Flight;

@Component
public class FlightData implements FlightDataInterface{
	
	List<Flight> flightsList=flightsList();

	@Override
	public List<Flight> getAllFlights() {
		// TODO Auto-generated method stub
		return null;
	}

	@SuppressWarnings("deprecation")
	private List<Flight> flightsList() {
		List<Flight> flightList = new ArrayList<>();
		flightList.add(new Flight("Madrid", "Londres", "Ryanair", false, new Date(2022, 12, 1), 83.95, false));
		flightList.add(new Flight("Madrid", "Londres", "Ryanair", false, new Date(2022, 12, 1), 83.95, false));
		flightList.add(new Flight("Madrid", "Londres", "Ryanair", false, new Date(2022, 12, 1), 83.95, false));
		flightList.add(new Flight("Madrid", "Londres", "Iberia", false, new Date(2022, 12, 1), 83.95, false));
		flightList.add(new Flight("Madrid", "Londres", "Iberia", false, new Date(2022, 12, 1), 83.95, false));
		flightList.add(new Flight("Madrid", "Londres", "Iberia", false, new Date(2022, 12, 1), 83.95, false));
		
		return flightList;
	}
	
	
	
	public List<Flight> getFlightsByFilter(Flight fl){
		
		
		
		List<Flight> filteredFlights= flightsList();
		if(!fl.getOrigin().isEmpty() && fl.getOrigin() != null) {
			filteredFlights.removeIf(f -> !f.getOrigin().equals(fl.getOrigin()));
		}
		if(!fl.getDestination().isEmpty() && fl.getDestination() != null) {
			filteredFlights.removeIf(f -> !f.getDestination().equals(fl.getDestination()));
		}
		
		if(!fl.getAirlane().isEmpty() && fl.getAirlane() != null) {
			filteredFlights.removeIf(f -> !f.getAirlane().equals(fl.getAirlane()));
		}
		
		filteredFlights.removeIf(f -> f.isLuggage() != fl.isLuggage());
		
		filteredFlights.removeIf(f -> f.isScales() != fl.isScales());
		
		
		if(fl.getDate() != null) {
			filteredFlights.removeIf(f -> !f.getDate().equals(fl.getDate()));
		}
		
		return filteredFlights;
		
	}

}
