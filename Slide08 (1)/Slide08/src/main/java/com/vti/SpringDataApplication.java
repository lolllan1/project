package com.vti;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.vti.form.AccountCreateForm;
import com.vti.entity.Account;
@SpringBootApplication
public class SpringDataApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringDataApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper(){
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.typeMap(AccountCreateForm.class, Account.class)
				.addMappings(mapper -> mapper.skip(Account::setId));
		return modelMapper;
	}
	// dùng để chuyển object -> string
	@Bean
	public ObjectWriter objectWriter() {
		return new ObjectMapper()
				.findAndRegisterModules()
				.writerWithDefaultPrettyPrinter();
	}

}
