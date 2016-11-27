/* @flow */
export default class ProjectsHelper {
	constructor(): object {}

  sortProjectBy(prop: string, projects: array): array {
    switch(prop) {
      case 'stars':
        return projects.sort(this.compareProjectsByStart);
        break;
      default:
        return projects;
        break;
    }
  }

  getFromName(name: string, projects: array)  {
    return projects.find((element) => {
      return element.name === name;
    });
  }

  compareProjectsByStart(projectOne: object, projectTwo: object): Interger {
    if (parseInt(projectOne.stargazers_count) < parseInt(projectTwo.stargazers_count))
      return 1;
    if (parseInt(projectOne.stargazers_count) > parseInt(projectTwo.stargazers_count))
      return -1;
    return 0;
  }
}
