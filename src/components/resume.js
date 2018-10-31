import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img src="https://www.shareicon.net/download/512x512/2016/08/13/808485_manager_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Bruna José Vieira</h2>
            <h4 style={{color: 'grey'}}>Front End Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> Meu nome é Bruna José Vieira, sou formada em Ciências Econômicas. Sempre gostei da área tecnológica e agora sou parte das estudantes da primeira turma de Front- End da Laboratoria Brasil.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Cidade</h5>
            <p>São Paulo</p>
            <h5>Telefone</h5>
            <p>(11) 456-7890</p>
            <h5>Email</h5>
            <p>brujvieira@yahoo.com.br</p>            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Formação</h2>
            <Education
              startYear={2018}
              endYear={2018}
              schoolName="Laboratoria"
              schoolDescription="Desenvolvedora Front End"
               />

               <Education
                 startYear={2005}
                 endYear={2009}
                 schoolName="Universidade de São Paulo"
                 schoolDescription="Cientista Econômica"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

                      
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
