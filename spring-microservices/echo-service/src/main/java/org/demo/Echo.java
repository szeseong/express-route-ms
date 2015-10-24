package org.demo;

public class Echo {

	private String echo;
	
	private Long id;

	public String getEcho() {
		return echo;
	}

	public void setEcho(String echo) {
		this.echo = echo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Echo(Long id, String echo) {
		super();
		this.id = id;
		this.echo = echo;
	}

	
	
}
