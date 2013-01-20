package org.llt.wine.repository;

import java.util.ArrayList;
import java.util.List;

import org.llt.wine.model.PaginatedWines;
import org.llt.wine.model.Wine;
import org.springframework.stereotype.Repository;

@Repository
public class WineRepository {
	List<Wine> wines = new ArrayList<Wine>();

	public WineRepository() {
		for(int i= 1; i <= 180; i++ ){
			int pictureId = i <= 18 ? i : (i%18); 
			Wine wine = new Wine(String.valueOf(i), "Wine-"+i, "190"+i, "This is awesome Wine-"+i, "picture-"+pictureId+".jpg");
			wines.add(wine);
			
		}
	}
	
	public PaginatedWines findAll(int pageNumber, int perPage) {
		int startPos = pageNumber * perPage;
		int endPos = startPos + perPage;
		int totalCount = wines.size();
		
		if(endPos > totalCount) {
			endPos = totalCount;
		}
		
		PaginatedWines paginatedWines = new PaginatedWines();
		paginatedWines.setWines(wines.subList(startPos, endPos));
		paginatedWines.setTotalRecords(totalCount);
		
		return paginatedWines;
	}

	public Wine findById(String id) {
		for (Wine todo : wines) {
			if(todo.getId().equals(id))
				return todo;
		}
		return null;
	}

}
