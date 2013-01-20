package org.llt.wine.controller;

import javax.inject.Inject;

import org.llt.wine.model.PaginatedWines;
import org.llt.wine.model.Wine;
import org.llt.wine.repository.WineRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping ("/api/wines")
public class WineController {
	
	private static final Logger logger = LoggerFactory.getLogger(WineController.class);

	@Inject
	private WineRepository repository;
	
	@RequestMapping (method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public PaginatedWines findAll(@RequestParam("pageZeroBased") int pageNumber, @RequestParam("resultsPerPage") int perPage) {
		logger.info("WineController :::: findAll ---- pageNumber:" + pageNumber + "  resultsPerPage:" + perPage);
		return repository.findAll(pageNumber, perPage);
	}
	
	@RequestMapping (value = "{id}", method = RequestMethod.GET)
	@ResponseBody
	public Wine get(@PathVariable ("id") String id) {
		logger.info("WineController :::: get (id = " + id + ")");
		return repository.findById(id);
	}
	
}
