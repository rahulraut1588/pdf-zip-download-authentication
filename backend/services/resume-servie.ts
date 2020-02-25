export class ResumeService {

    public resumeHTML: any;
    public summaryList: String;
    public languagesList: String;
    public databasesList: String;
    public frameworksList: String;
    public profExp: String;

    upadateResume(resumeData) {

        resumeData = JSON.stringify(resumeData);
        resumeData = JSON.parse(resumeData);
        
        this.summaryList = '';
        this.languagesList = '';
        this.databasesList = '';
        this.frameworksList = '';
        this.profExp = '';

        for(let i=0; i<resumeData.summary.length;i++) {
          this.summaryList += '<li style="margin-bottom: 5px;">' + resumeData.summary[i] + '</li>'
        }
        
        
        for(let i=0; i<resumeData.technical_skills.languages.length;i++) {
          this.languagesList += resumeData.technical_skills.languages[i];
          this.languagesList += (i < (resumeData.technical_skills.languages.length - 1) ) ?  ', ' : '';
        }
        
        for(let i=0; i<resumeData.technical_skills.database.length;i++) {
          this.databasesList += resumeData.technical_skills.database[i];
          this.databasesList += (i < (resumeData.technical_skills.database.length - 1) ) ?  ', ' : '';
        }
        
        for(let i=0; i<resumeData.technical_skills.frameworks.length;i++) {
          this.frameworksList += resumeData.technical_skills.frameworks[i];
          this.frameworksList += (i < (resumeData.technical_skills.frameworks.length - 1) ) ?  ', ' : '';
        }

        for(let i=0; i<resumeData.professional_experience.length;i++) {
          this.profExp += `<div class="project">
            <div class="project-title">
              ${resumeData.professional_experience[i].project_name}
            </div>
            <div class="project-description">
              ${resumeData.professional_experience[i].project_description}
            </div>
            <ol>
              <li> 
                Technologies used – <br>
                <ul><li>`;
                  for(let j=0; j<resumeData.professional_experience[i].technologies_used.length;j++) {
                    this.profExp += resumeData.professional_experience[i].technologies_used[j];
                    this.profExp += (j < (resumeData.professional_experience[i].technologies_used.length - 1) ) ?  ', ' : '';
                  }
                this.profExp += `</li></ul>
              </li>
              <br>
              <li>
                Responsibilities – <br>
                <ul>`;
                  for(let k=0; k<resumeData.professional_experience[i].responsibilities_summary.length;k++) {
                    this.profExp += `<li>` + resumeData.professional_experience[i].responsibilities_summary[k] + `</li>`;
                  }
                this.profExp += `</ul>
              </li>
            </ol>
          </div>`;
        }

        const html = '<style> \
        * { font-size: 9px; font-family: calibri, sans-serif; color: #595959; } \
        .blue-text { color: #2e75b5; } \
        .dark-blue-text { color: #1f4e79; } \
        .project-title, .project-description { margin-bottom: 10px; } \
        .project-title { font-weight: bold; text-transform: uppercase; font-size: 8px; }\
        .blue-border { border: 0px; border-bottom: 1px solid #2e75b5; } \
        .main-header { background-color: #2e75b5; color: #fff; font-size: 12px; line-height: 22px; padding: 8px 16px; margin-top: -7px; }\
        .summary { margin-top: 10px} \
        table td { vertical-align: top; } \
        .project { page-break-inside: avoid; } \
        .project:not(:first-child) { padding-top: 30px; } \
        ul { list-style-type: disc; } \
      </style>\
      <div class="main-header">' 
        + resumeData.first_name + ' ' + resumeData.last_name
      + '</div>\
      <div class="summary">\
        <table>\
          <tr>\
            <td class="dark-blue-text" style="text-align:center; width: 130px; font-size: 8px;">SUMMARY</td>\
            <td>\
              <ul>' + this.summaryList + '</ul>\
            </td>\
          <tr>\
        </table>\
      </div>\
      <hr class="blue-border" /> \
      <div class="summary">\
        <table>\
          <tr>\
            <td class="dark-blue-text" style="text-align:center; width: 130px; font-size: 8px;">SKILLS & ABILITIES</td>\
            <td>\
              <ul>\
                <li style="margin-bottom: 5px;"> languages: '+ this.languagesList + '</li>\
                <li style="margin-bottom: 5px;"> Databases: '+ this.databasesList + '</li>\
                <li style="margin-bottom: 5px;"> Frameworks: '+ this.frameworksList + '</li>\
              </ul>\
            </td>\
          <tr>\
        </table>\
      </div>\
      <hr class="blue-border" /> \
      <div class="summary">\
        <table>\
          <tr>\
            <td class="dark-blue-text" style="text-align:center; width: 130px; font-size: 8px;">PROFESSIONAL EXPERIENCE</td>\
            <td>\
              <div class="prof-exp">' + this.profExp + '</div>\
            </td>\
          <tr>\
        </table>\
      </div>\
      ';
    return html;
  }
}