import PDFMerger from "pdf-merger-js";
import * as pdfMake from "pdfmake/build/pdfmake";
import type { TDocumentDefinitions } from "pdfmake/interfaces";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

export class LicenseManager {
    private pdfState: PDFMerger = new PDFMerger();

    public static async pdfMakerToBuffer(pdfContent: TDocumentDefinitions): Promise<Buffer> {
        return new Promise((resolve, _) => {

            const pdfBuffer = pdfMake.createPdf(pdfContent) as any;

            pdfBuffer.getBuffer().then((buffer: Buffer) => {
                resolve(buffer);
            }, (err: any) => {
                console.error(err);
            });
        });
    }

    public add(pdf: Buffer | string, pages?: string | string[]): LicenseManager {
        this.pdfState.add(pdf, pages);

        return this;
    }

    public async download(name?: string): Promise<void> {
        await this.pdfState.save(name || 'ProAK License');
    }

    public renderLicense(): HTMLDivElement {
        const licenseElement = document.createElement("div");
        licenseElement.innerText = 'Licenses';

        licenseElement.onclick = (e) => {
            this.download();
        }

        return licenseElement;
    }
}