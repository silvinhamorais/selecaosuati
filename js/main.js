    $(document).ready(function() {
	// dados json
        data = {
         "contracts":[{"Código":"123/2012","Data acordo comercial":"22-01-2012","Natureza":"Compra","Comprador":"Capibaribe Energia","Vendedor":"Contoso Comercializadora","Energia referência":"6,35521 MWméd","Energia entregue":"3,261841 MWméd","Status aprovação":"Aprovado","Modelo":"CCEAR Disponibilidade","Preço base contratado":"131,40","Submercado":"Sudeste/Centro-oeste","Início fornecimento":"Fev/2012","Fim fornecimento":"Fev/2013","Início vigência":"Jan/2012","Fim vigência":"Mar/2013"},{"Código":"321/2015","Data acordo comercial":"01-05-2015","Natureza":"Compra","Comprador":"Capibaribe Energia","Vendedor":"Contoso Comercializadora","Energia referência":"9,39931 MWméd","Energia entregue":"5 MWméd","Status aprovação":"Aprovado","Modelo":"CCEAR Quantidade","Preço base contratado":"103,40","Submercado":"Sudeste/Centro-oeste","Início fornecimento":"Dez/2015","Fim fornecimento":"Fev/2020","Início vigência":"Jun/2015","Fim vigência":"Dez/2020"},{"Código":"133/2011","Data acordo comercial":"22-01-2011","Natureza":"Compra","Comprador":"Capibaribe Energia","Vendedor":"Contoso Comercializadora","Energia referência":"2,915931 MWméd","Energia entregue":"1,915931 MWméd","Status aprovação":"Aprovado","Modelo":"CCEAR Disponibilidade","Preço base contratado":"121,40","Submercado":"Sudeste/Centro-oeste","Início fornecimento":"Fev/2011","Fim fornecimento":"Fev/2012","Início vigência":"Jan/2011","Fim vigência":"Mar/2013"},{"Código":"331/2015","Data acordo comercial":"01-05-2015","Natureza":"Compra","Comprador":"Capibaribe Energia","Vendedor":"Contoso Comercializadora","Energia referência":"210,39931 MWméd","Energia entregue":"9,354711 MWméd","Status aprovação":"Pendente","Modelo":"CCEAR Quantidade","Preço base contratado":"130,40","Submercado":"Sudeste/Centro-oeste","Início fornecimento":"Dez/2015","Fim fornecimento":"Fev/2020","Início vigência":"Jun/2015","Fim vigência":"Dez/2020"},{"Código":"333/2014","Data acordo comercial":"13-02-2013","Natureza":"Compra","Comprador":"Capibaribe Energia","Vendedor":"Contoso Comercializadora","Energia referência":"8,39931 MWméd","Energia entregue":"3,354711 MWméd","Status aprovação":"Pendente","Modelo":"CCEAR Disponibilidade","Preço base contratado":"130,40","Submercado":"Sul","Início fornecimento":"Dez/2014","Fim fornecimento":"Fev/2019","Início vigência":"Jun/2014","Fim vigência":"Dez/2019"},{"Código":"541/2016","Data acordo comercial":"22-01-2016","Natureza":"Compra","Comprador":"Capibaribe Energia","Vendedor":"Contoso Comercializadora","Energia referência":"82 MWméd","Energia entregue":"20 MWméd","Status aprovação":"Aprovado","Modelo":"CCEAR Disponibilidade","Preço base contratado":"98,00","Submercado":"Sudeste/Centro-oeste","Início fornecimento":"Fev/2017","Fim fornecimento":"Fev/2025","Início vigência":"Jan/2017","Fim vigência":"Mar/2025"},{"Código":"32/2014","Data acordo comercial":"13-02-2014","Natureza":"Compra","Comprador":"Capibaribe Energia","Vendedor":"Contoso Comercializadora","Energia referência":"6,39931 MWméd","Energia entregue":"1,354711 MWméd","Status aprovação":"Aprovado","Modelo":"CCEAR Quantidade","Preço base contratado":"140,11","Submercado":"Sul","Início fornecimento":"Dez/2017","Fim fornecimento":"Fev/2022","Início vigência":"Jun/2017","Fim vigência":"Dez/2022"},{"Código":"334/2016","Data acordo comercial":"13-02-2016","Natureza":"Compra","Comprador":"Capibaribe Energia","Vendedor":"Contoso Comercializadora","Energia referência":"7 MWméd","Energia entregue":"3 MWméd","Status aprovação":"Aprovado","Modelo":"CCEAR Disponibilidade","Preço base contratado":"100,40","Submercado":"Sul","Início fornecimento":"Dez/2016","Fim fornecimento":"Fev/2019","Início vigência":"Jun/2016","Fim vigência":"Dez/2019"},{"Código":"555/2014","Data acordo comercial":"15-04-2014","Natureza":"Compra","Comprador":"Capibaribe Energia","Vendedor":"Contoso Comercializadora","Energia referência":"9,39931 MWméd","Energia entregue":"5 MWméd","Status aprovação":"Aprovado","Modelo":"CCEAR Quantidade","Preço base contratado":"103,40","Submercado":"Sul","Início fornecimento":"Dez/2016","Fim fornecimento":"Jan/2038","Início vigência":"Mai/2014","Fim vigência":"Jan/2038"},{"Código":"11/2011","Data acordo comercial":"13-02-2011","Natureza":"Venda","Comprador":"Contoso Comercializadora","Vendedor":"Capibaribe Energia","Energia referência":"6,35521 MWméd","Energia entregue":"3,261841 MWméd","Status aprovação":"Pendente","Modelo":"CCEAR Disponibilidade","Preço base contratado":"123,05","Submercado":"Sul","Início fornecimento":"Dez/2013","Fim fornecimento":"Fev/2015","Início vigência":"Jun/2011","Fim vigência":"Dez/2019"},{"Código":"113/2011","Data acordo comercial":"13-02-2011","Natureza":"Venda","Comprador":"Contoso Comercializadora","Vendedor":"Capibaribe Energia","Energia referência":"6,35521 MWméd","Energia entregue":"3,261841 MWméd","Status aprovação":"Pendente","Modelo":"CCEAR Disponibilidade","Preço base contratado":"123,05","Submercado":"Sul","Início fornecimento":"Dez/2013","Fim fornecimento":"Fev/2015","Início vigência":"Jun/2011","Fim vigência":"Dez/2019"},{"Código":"211/2013","Data acordo comercial":"13-02-2011","Natureza":"Venda","Comprador":"Contoso Comercializadora","Vendedor":"Capibaribe Energia","Energia referência":"6,35521 MWméd","Energia entregue":"3,261841 MWméd","Status aprovação":"Pendente","Modelo":"CCEAR Disponibilidade","Preço base contratado":"123,05","Submercado":"Sul","Início fornecimento":"Dez/2013","Fim fornecimento":"Fev/2015","Início vigência":"Jun/2011","Fim vigência":"Dez/2019"},{"Código":"543/2018","Data acordo comercial":"13-02-2011","Natureza":"Venda","Comprador":"Contoso Comercializadora","Vendedor":"Capibaribe Energia","Energia referência":"6,35521 MWméd","Energia entregue":"3,261841 MWméd","Status aprovação":"Pendente","Modelo":"CCEAR Disponibilidade","Preço base contratado":"123,05","Submercado":"Sul","Início fornecimento":"Dez/2013","Fim fornecimento":"Fev/2015","Início vigência":"Jun/2011","Fim vigência":"Dez/2019"}]
 
	   } ;

	
	// carrega json	
        var newData = $.map(data.contracts, function(el) { return el });
       
        $('#tabela-contrato').DataTable({
            data: newData,
            columns: [
            {"data": "Código"},
            {"data": "Data acordo comercial"},
            {"data": "Natureza"},
            {"data": "Comprador"},
            {"data": "Vendedor"},
            {"data": "Energia referência"},
            {"data": "Energia entregue"},
            {"data": "Status aprovação"},
            {"data": "Modelo"},
            {"data": "Preço base contratado"},
            {"data": "Submercado"},
            {"data": "Início fornecimento"},
            {"data": "Fim fornecimento"},
            {"data": "Início vigência"},
            {"data": "Fim vigência"}

            ],
			
			"bJQueryUI": true,
            "oLanguage": {
                "sProcessing":   "Processando...",
                "sLengthMenu":   "Mostrar _MENU_ registros",
                "sZeroRecords":  "Não foram encontrados resultados",
                "sInfo":         "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty":    "Mostrando de 0 até 0 de 0 registros",
                "sInfoFiltered": "",
                "sInfoPostFix":  "",
                "sSearch":       "Buscar:",
                "sUrl":          "",
                "oPaginate": {
                    "sFirst":    "Primeiro",
                    "sPrevious": "Anterior",
                    "sNext":     "Seguinte",
                    "sLast":     "Último"
                }
            }
			

        });
					
		
		 } );
		 
		 
		 // esconde/mostra coluna
		 
		$(document).ready(function() {
        var table = $('#tabela-contrato').DataTable( {
            "scrollY": "200px",
            "paging": false
        } );

        $('a.toggle-vis').on( 'click', function (e) {
            e.preventDefault();

        var column = table.column( $(this).attr('data-column') );
        column.visible( ! column.visible() );
    } );
    } );
	
	
	// edita e valida dados da tabela-contrato
	
	

    $(document).ready(function() {
	   var editor; 
        editor = new $.fn.dataTable.Editor( {
            ajax: "../php/staff.php",
            table: "#tabela-contrato",
            fields: [ {
                label: "Código:",
                name: "Código"
            }, {
			    label: "Data acordo comercial:",
                name: "Data acordo comercial",
                type: "datetime"
            }, {
                label: "Natureza:",
                name: "Natureza"
            }, {
                label: "Comprador:",
                name: "Comprador"
            }, {
			 label: "Vendedor:",
                name: "Vendedor"
            }, {
                label: "Energia referência:",
                name: "Energia referência"
            }, {
                label: "Energia entregue:",
                name: "Energia entregue"
            }, {
                label: "Status aprovação:",
                name: "Status aprovação",
            }, {
                label: "Modelo:",
                name: "Modelo"
            }, {
                label: "Preço base contratado:",
                name: "Preço base contratado",
            }, {
			   label: "Submercado:",
                name: "Submercado",
            }, {
				label: "Início fornecimento:",
                name: "Início fornecimento",
            }, {
			label: "Fim fornecimento:",
                name: "Fim fornecimento",
            }, {
			label: "Início vigência:",
                name: "Início vigência",
            }, {
			label: "Fim vigência:",
                name: "Fim vigência",
            },		
			
            ]
        } );


        $('#tabela-contrato').on( 'click', 'tbody td:not(:first-child)', function (e) {
            editor.inline( this );
        } );

        $('#tabela-contrato').DataTable( {
            dom: "Bfrtip",
            ajax: "../php/staff.php",
            order: [[ 1, 'asc' ]],
            columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            {"data": "Código"},
            {"data": "Data acordo comercial"},
            {"data": "Natureza"},
            {"data": "Comprador"},
            {"data": "Vendedor"},
            {"data": "Energia referência"},
            {"data": "Energia entregue"},
            {"data": "Status aprovação"},
            {"data": "Modelo"},
            {"data": "Preço base contratado"},
            {"data": "Submercado"},
            {"data": "Início fornecimento"},
            {"data": "Fim fornecimento"},
            {"data": "Início vigência"},
            {"data": "Fim vigência"}
            
            ],
            select: {
                style:    'os',
                selector: 'td:first-child'
            },
            buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
            ]
        } );
    } );
