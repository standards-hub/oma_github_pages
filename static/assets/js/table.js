jQuery.noConflict();   
  jQuery(document).ready(function () {
    var dt = $('#tablaUsuarios').dataTable(

    );
    dt.fnDestroy();
  });
  jQuery(document).ready(function () {
    const url = 'https://raw.githubusercontent.com/standards-hub/cim_github_pages/gh-pages/cim_subject_areas_library.json';
    var table = $('#tablaUsuarios').DataTable({

      ajax: {
        url: url,
        dataSrc: function (json) {
          let j = json;
          let jf = [];
          for (let i = 0, ien = json.domains.length; i < ien; i++) {
            for (let j = 0, jen = json.domains[i].subjectAreas.length; j < jen; j++) {
              for (let k = 0, ken = json.domains[i].subjectAreas[j].versions.length; k < ken; k++) {
                let name = json.domains[i].name;
                let subjectAreas = json.domains[i].subjectAreas[j].name;
                let version = json.domains[i].subjectAreas[j].versions[k].version;
                let versionDate = json.domains[i].subjectAreas[j].versions[k].versionDate;
                let diagramURL = json.domains[i].subjectAreas[j].versions[k].diagramURL;
                let descriptionURL = json.domains[i].subjectAreas[j].versions[k].descriptionURL;
                let gitHubURL = json.domains[i].subjectAreas[j].versions[k].gitHubURL;
                jf.push({
                  name: name,
                  subjectAreas: subjectAreas,
                  version: version,
                  versionDate: (versionDate.year + '-' + versionDate.month + '-' + versionDate.day),
                  diagramURL: diagramURL,
                  descriptionURL: descriptionURL,
                  gitHubURL: gitHubURL
                });
              }
            }
          }
          return jf;
        }
      },
      columns: [
        {
          "data": "name",
          "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
            $(nTd).css('vertical-align', 'top')
            $(nTd).css('padding', '44px 10px')
          },
          "render": function (data, type, row, meta) {
            return data;
          }
        },
        {
          "data": "subjectAreas",
          "render": function (data, type, row, meta) {
            return data;
          }
        },
        {
          "className": "text-center",
          "data": "version",
          "render": function (data, type, row, meta) {
            return data;
          }
        },
        {
          "className": "text-center",
          "data": "versionDate",
          "render": function (data, type, row, meta) {
            return data;
          }
        },
        {
          "className": "text-center",
          "data": "diagramURL",
          "render": function (data, type, row, meta) {
            return '<a href="' + data + '" target="_blank"><img src="./img/doc.png" "height="20" width="20"></a>';
          }
        },
        {
          "data": "descriptionURL",
          "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
            $(nTd).css('font-size', '14px')
          },
          "render": function (data, type, row, meta) {
            return data;
          }
        },
        {
          "className": "text-center",
          "data": "gitHubURL",
          "render": function (data, type, row, meta) {
            return '<a href="' + data + '" target="_blank"><img src="./img/github.png" "height="20" width="20"></a>';
          }
        },
      ],
      order: [[0, 'asc'], [1, 'asc'], [2, 'asc'], [3, 'asc']],
      rowsGroup: [0],
      rowReorder: {
        dataSrc: 'name',
      },
      'rowsGroup': [0],
      "columnDefs": [
        { "orderable": false, "targets": [4, 5, 6] },
      ]
    });

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const search = urlParams.get('search')
    if (search) {
      table.search(search);
    }


    $('#all').on('click', function () {
      table.search('').columns().search('').draw();
    });

    $('#last').on('click', function () {
      table.column(2).search('1.1').draw();
    });

    $('#sel1').change(function () {
      if (this.value === "All") {
        table
          .columns(0)
          .search('')
          .draw();
      } else {
        table
          .columns(0)
          .search(this.value)
          .draw();
      }
    });
    $('#sel2').change(function () {
      if (this.value === "All") {
        table
          .columns(0)
          .search('')
          .draw();
      } else {
        table
          .search(this.value)
          .draw();
      }
    });
    $('#sel3').change(function () {
      if (this.value === "All") {
        table
          .columns(1)
          .search('')
          .draw();
      } else {
        table
          .columns(1)
          .search(this.value)
          .draw();
      }
    });
  });
