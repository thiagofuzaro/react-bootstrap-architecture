import React from "react";

export default class ServiceExample extends React.Component {
  render() {
  	const _getList = () => {
		const SERVICE_URL = 'http://api.geonames.org/earthquakesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&username=demo';
		fetch(SERVICE_URL)
		  .then(response => response.json())
		  .then(result => {
		    console.log(result);
		  })
		  .catch(err => {
		  console.error('Falha ao retornar serviço', err);
		});
	}

    return (
      <div>
        <h1>Serviço</h1>
        <button type="button" class="btn btn-primary" onClick={_getList}>Load Data</button>
      </div>
    );
  }
}