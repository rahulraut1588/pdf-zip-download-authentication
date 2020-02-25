import { Response, Request, NextFunction } from 'express';
import { UserRepository } from '../repository/UserRepository';
import { ResumeService } from '../services/resume-servie';

import path from 'path';
import fs from 'fs';
import pdf from 'html-pdf';
import archiver from 'archiver';

export class PdfController {

    // public userRepository : UserRepository = new UserRepository();
    // public resumeService: ResumeService = new ResumeService();

    downloadPdf = async (req: Request, res: Response, next: NextFunction) => {
        // try {
        //     // const user = await this.userRepository.getUser(req.params.id);
        //     const user = [];
        //     const html = this.resumeService.upadateResume(user);
        //     const options = { 
        //         format: 'letter',
        //         border: {
        //             top: "0.6in",
        //             right: "0.6in",
        //             bottom: "0.6in",
        //             left: "0.6in"
        //         },
        //         type: "pdf",
        //         quality: "75",
        //         zoomFactor: "1",
        //         header: {
        //             height: "1mm",
        //             contents: '<div style="height: 1px; background-color: #2e75b5;"></div>',
        //         },
        //         footer: {
        //             height: "1mm",
        //             contents: {
        //                 default: '<div style="background-color: #2e75b5; height: 1px;"></div>'
        //             }
        //         },
        //     };
        //     pdf.create(html, options).toFile('resume/resume_'+req.params.id+'.pdf', async (err, data) => { 
        //         if (err) console.log(err);
                
        //         if ( !user ) {
        //             res.status(404).send(' User Not Found ');
        //         } else {
        //             const file = await this.readFile('/../resume/', 'resume_' + req.params.id + '.pdf');
        //             const stat = fs.statSync(path.resolve(__dirname + '/../resume/resume_'+req.params.id+'.pdf'));
        //             res.setHeader('Content-Length', stat.size);
        //             res.setHeader('Content-Type', 'application/pdf');
        //             res.setHeader('Accept', 'application/json');
        //             res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
        //             file.pipe(res);
        //         }
        //     });
        // } catch ( error) {
        //     next(error);
        // }
    }

    readFile = async (pathData, fileName) => {
        // const file = fs.createReadStream(path.resolve(__dirname + pathData + fileName));
        // if ( !file ) {
        //     this.readFile(pathData, fileName);
        // } else {
        //     return file;
        // }
    }

    bulkDownload = async (req: Request, res: Response, next: NextFunction) => {
        
        // this.generateZip(req, res).then( async (result:any) => {
        //     console.log(result);
        //     const zipFile = await this.readFile('', '/../bulk.zip');
        //     res.setHeader('Content-Length', result.size);
        //     res.setHeader('Content-Type', 'application/zip');
        //     res.setHeader('Content-disposition', 'attachment; filename=resume.zip');
        //     zipFile.pipe(res);
        // })

    }

    generatePDF = async (userId, res) => {
        
        // const user = await this.userRepository.getUser(userId);
        // const user = [];
        // if ( !user ) res.status(404).send(' User Not Found ');

        // const html = this.resumeService.upadateResume(user);
        
        // const options = { 
        //     format: 'letter',
        //     border: {
        //         top: "0.6in",
        //         right: "0.6in",
        //         bottom: "0.6in",
        //         left: "0.6in"
        //     },
        //     type: "pdf",
        //     quality: "75",
        //     zoomFactor: "1",
        //     header: {
        //         height: "1mm",
        //         contents: '<div style="height: 1px; background-color: #2e75b5;"></div>',
        //     },
        //     footer: {
        //         height: "1mm",
        //         contents: {
        //             default: '<div style="background-color: #2e75b5; height: 1px;"></div>'
        //         }
        //     },
        // };

        // return new Promise ((resolve, reject) => {
        //     pdf.create(html, options).toFile('bulk/resume_'+userId+'.pdf', async (err, data) => { 
        //         if (err) reject(err);
        //         resolve(data);
        //     });
        // }) 

    } 

    generateZip = async (req, res) => {

        // return new Promise ((resolve, reject) => {

        //     var file: any;
        //     var i = 0;

        //     const archive = archiver('zip', {
        //         gzip: true,
        //         zlib: { level: 9 } // Sets the compression level.
        //     });
            
        //     fs.readdir('bulk', (err, files) => {
        //         if (err) throw err;
            
        //         for (const file of files) {
        //             fs.unlink(path.join('bulk', file), err => {
        //                 if (err) throw err;
        //             });
        //         }
        //     });

        //     const output = fs.createWriteStream('bulk.zip');

        //     archive.pipe(output);

        //     req.query.downloadArray.forEach( async (userId) => {  
                
        //         file = await this.generatePDF(userId, res);
                
        //         fs.access(file.filename, fs.constants.F_OK, (err) => {
        //             if (err) {
        //             console.error(err)
        //             res.status(404).send('File Not Found')
        //             }
        //         })

        //         if ( (req.query.downloadArray.length - 1) === i ) {
        //             archive.glob('bulk/*.pdf');
        //             archive.finalize();
        //         }

        //         i++;

        //     });

        //     output.on('close', async () => {
        //         const stat = fs.statSync(path.resolve(__dirname + '/../bulk.zip'));
        //         resolve(stat);
        //     });

        //     archive.on('error', (err) => {
        //         reject(err);
        //     });
            
        // }); 
    }
}