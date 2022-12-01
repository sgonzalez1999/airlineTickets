package com.solera.booking.flightbooking.model;

import java.util.Date;

public class Flight {
	
	private String origin;
	private String destination;
	private String airlane;
	private boolean luggage;
	private Date date;
	private double price;
	private boolean scales;
	
	public Flight() {
		super();
	}
	
	public Flight(String origin, String destination, String airlane, boolean luggage, Date hour, boolean scales) {
		super();
		this.origin = origin;
		this.destination = destination;
		this.airlane = airlane;
		this.luggage = luggage;
		this.date = hour;
		this.scales = scales;
	}
	
	public Flight(String origin, String destination, String airlane, boolean luggage, Date hour, double d, boolean scales) {
		super();
		this.origin = origin;
		this.destination = destination;
		this.airlane = airlane;
		this.luggage = luggage;
		this.date = hour;
		this.price = d;
		this.scales = scales;
	}
	
	public String getOrigin() {
		return origin;
	}
	
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	
	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getAirlane() {
		return airlane;
	}
	
	public void setAirlane(String airlane) {
		this.airlane = airlane;
	}
	
	public boolean isLuggage() {
		return luggage;
	}
	
	public void setLuggage(boolean luggage) {
		this.luggage = luggage;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	public double getPrice() {
		return price;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}
	
	public boolean isScales() {
		return scales;
	}
	
	public void setScales(boolean scales) {
		this.scales = scales;
	}
	
	
	
	

}
