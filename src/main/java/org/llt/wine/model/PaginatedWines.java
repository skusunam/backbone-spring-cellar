package org.llt.wine.model;

import java.util.List;

public class PaginatedWines {
	
	private List<Wine> wines;
	private int totalRecords;
	
	public List<Wine> getWines() {
		return wines;
	}
	public void setWines(List<Wine> wines) {
		this.wines = wines;
	}
	public int getTotalRecords() {
		return totalRecords;
	}
	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}
	
}
