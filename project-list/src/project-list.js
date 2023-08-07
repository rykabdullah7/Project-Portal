import React, {useState } from 'react';
import { FaStar } from 'react-icons/fa';

function ProjectList() {
  const [projects, setProjects] = useState([
    { name: 'project 1', hidden: false, isStarred: false },
    { name: 'project 2', hidden: false, isStarred: false },
    { name: 'project 3', hidden: false, isStarred: false },
    { name: 'project 4', hidden: false, isStarred: false },
    { name: 'project 5', hidden: false, isStarred: false },
    { name: 'project 6', hidden: false, isStarred: false },
    { name: 'project 7', hidden: false, isStarred: false },
    { name: 'project 8', hidden: false, isStarred: false }
  ]);

  return (
    <>
      <h1>Project Portal</h1>
      <button id="unhide" className="btn btn-primary" onClick={() => setProjects(projects.map(project => ({ ...project, hidden: false })))}>
        Show all projects
      </button>
      <div className="clear"></div>
      <div>
        <table width="100%" className="table-hover custom-table">
          <tbody className="custom-tbody">
            {projects.map((project, index) => (
              <tr key={index} style={{ display: project.hidden ? 'none' : 'table-row' }}>
                <td>
                  <span>{project.name}</span>

                  <button
                    type="button"
                    className={`star ${project.isStarred? '':'star-button'}`}
                    onClick={() => 
                      setProjects((prevProjects) => {
                        const updatedProjects = [...prevProjects];
                        updatedProjects[index] = {
                          ...updatedProjects[index],
                          isStarred: !updatedProjects[index].isStarred,
                        };
                  
                        return updatedProjects;
                      })
                    }
                  >
                    <FaStar size={30} className='pb-2' color={project.isStarred ? 'rgb(218,165,32)' : 'rgb(211,211,211)'} />
                  </button>

                  <button className="btn btn-primary hid" onClick={() => 
                        setProjects((prevProjects) => {
                          const updatedProjects = [...prevProjects];
                          const isStarred = updatedProjects[index].isStarred;
                    
                          if (!isStarred) {
                            updatedProjects[index].hidden = true;
                          }
                    
                          return updatedProjects;
                        })
                  }>
                    Hide
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProjectList;
