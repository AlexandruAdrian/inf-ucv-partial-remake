import React from 'react';

const StudyPlans = ({ className: animation }) => {

  return (
    <div className={`study-plans ${animation}`}>
      <h4>Planuri de invatamant</h4>
      <h5>Ciclul I - Licenta (3 ani)</h5>
      <p><em>Informatica:</em></p>
      <ul>
        <li>
          <a href="http://localhost:8000/documents/plan-invatamant-licenta-2018-2019-I.pdf" target="_blank" rel="noopener noreferrer">
            Anul I
          </a>
            , promotia 2018-2021
        </li>
        <li>
          <a href="http://localhost:8000/documents/plan-invatamant-licenta-2018-2019-II.pdf" target="_blank" rel="noopener noreferrer">
            Anul II
          </a>
          , promotia 2017-2020
        </li>
        <li>
          <a href="http://localhost:8000/documents/plan-invatamant-licenta-2018-2019-III.pdf" target="_blank" rel="noopener noreferrer">
            Anul III
          </a>
          , promotia 2016-2019
        </li>
      </ul>

      <h5>Ciclul II - Master</h5>
      <p><em>Informatica- Metode si Modele ale Inteligentei Artificiale</em></p>
      <ul>
        <li>
          <a
            href="http://cis01.central.ucv.ro/evstud/planuri/index.php?an_univ=2017&facultate=500013&ciclu=4&forma=2&specializare=500784&an_stud=1&cmdExecuta=Execut%C4%83"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anul I
          </a>
          , promotia 2015-2017, (planul promotiei: <a
            href="http://localhost:8000/documents/plan-invatamant-masterat-mia-2015-2016-a1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            a1
          </a>, <a
            href="http://localhost:8000/documents/plan-invatamant-masterat-mia-2015-2016-a2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            a2
          </a>)
        </li>
        <li>
          <a
            href="http://cis01.central.ucv.ro/evstud/planuri/index.php?an_univ=2014&facultate=500013&ciclu=4&forma=2&specializare=500784&an_stud=2&cmdExecuta=Execut%C4%83"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anul II
          </a>
          , promotia 2014-2016, (planul promotiei: <a
            href="http://localhost:8000/documents/plan-invatamant-MIA-2014-2015-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            a1
          </a>, <a
            href="http://localhost:8000/documents/plan-invatamant-MIA-2014-2015-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            a2
          </a>)
        </li>
      </ul>

      <p><em>Informatica - Tehnici avansate pentru prelucrarea informatiei</em></p>
      <ul>
        <li>
          Anul I, promotia 2018-2020, (planul promotiei: <a
            href="http://localhost:8000/documents/plan-invatamant-master-TPI-2018-2019-I.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            a1
        </a>, <a
            href="http://localhost:8000/documents/plan-invatamant-master-TPI-2018-2019-II.pdf"
            target="_blank"
            rel="noopener noreferrer">
            a2
        </a>)
      </li>
      </ul>
    </div>
  );
}

export default StudyPlans;