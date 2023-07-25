
class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        { name: 'project 1', hidden: false, starColor: 'rgb(255, 255, 255)' },
        { name: 'project 2', hidden: false, starColor: 'rgb(255, 255, 255)' },
        { name: 'project 3', hidden: false, starColor: 'rgb(255, 255, 255)' },
        { name: 'project 4', hidden: false, starColor: 'rgb(255, 255, 255)' },
        { name: 'project 5', hidden: false, starColor: 'rgb(255, 255, 255)' },
        { name: 'project 6', hidden: false, starColor: 'rgb(255, 255, 255)' },
        { name: 'project 7', hidden: false, starColor: 'rgb(255, 255, 255)' },
        { name: 'project 8', hidden: false, starColor: 'rgb(255, 255, 255)' },
      ],
    };
  }

  handleHideClick = (index) => {
    this.setState((prevState) => {
      const updatedProjects = [...prevState.projects];
      const starColor = updatedProjects[index].starColor;

      if (starColor !== 'rgb(218, 165, 32)') {
        
        updatedProjects[index].hidden = true;
      }

      return { projects: updatedProjects };
    });
  };

  handleShowAllClick = () => {
    this.setState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        return { ...project, hidden: false }; 
      });
  
      return { projects: updatedProjects };
    });
  };
  

  handleStarClick = (index) => {
    this.setState((prevState) => {
      const updatedProjects = [...prevState.projects];
      const currentColor = updatedProjects[index].starColor;
  
      updatedProjects[index].starColor =
        currentColor === 'rgb(255, 255, 255)' ? 'rgb(218, 165, 32)' : 'rgb(255, 255, 255)';
      
      if (updatedProjects[index].starColor === 'rgb(218, 165, 32)') {
        const starButton = document.getElementById(`star-btn-${index}`);
        starButton.classList.remove('hov');
      }
  
      return { projects: updatedProjects };
    });
  };
  

  render() {
    const { projects } = this.state;
    
    return (
      <>
        <h1>Project Portal</h1>
        <button id="unhide" className="btn btn-primary" onClick={this.handleShowAllClick}>
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
                    
                    {project.starColor === 'rgb(218, 165, 32)' ? (
                      <button
                      type="button"
                      className={`btn-link ${project.starColor === 'rgb(218, 165, 32)' ? '' : 'hov'}`}
                      id={`star-btn-${index}`}
                      onClick={() => this.handleStarClick(index)}
                      
                    >
                      <span className="bi bi-star-fill" style={{ color: project.starColor }}></span>
                    </button>
                    
                    ) : (
                        <button
                        type="button"
                        className={`btn-link ${project.starColor === 'rgb(218, 165, 32)' ? '' : 'hov'}`}
                        id={`star-btn-${index}`}
                        onClick={() => this.handleStarClick(index)}
                        
                      >
                        <span className="bi bi-star-fill" style={{ color: project.starColor }}></span>
                      </button>
                      
                    )}
                   
                    <button className="btn btn-primary hid" onClick={() => this.handleHideClick(index)}>
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
  
}

