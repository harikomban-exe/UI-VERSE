import jsPDF from 'jspdf';

export interface NewsletterPDFData {
  id: string;
  code: string;
  title: string;
  date: string;
  volume: string;
  category: string;
  summary: string;
  highlights: string[];
  classification: string;
}

export const generateNewsletterPDF = (data: NewsletterPDFData) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Background - Deep Black
  doc.setFillColor(8, 8, 8);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative border
  doc.setDrawColor(0, 240, 255);
  doc.setLineWidth(0.5);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

  // Inner corner brackets
  doc.setDrawColor(147, 51, 234);
  doc.setLineWidth(1);
  const m = 12;
  const l = 8;
  // Top left
  doc.line(m, m, m + l, m);
  doc.line(m, m, m, m + l);
  // Top right
  doc.line(pageWidth - m, m, pageWidth - m - l, m);
  doc.line(pageWidth - m, m, pageWidth - m, m + l);
  // Bottom left
  doc.line(m, pageHeight - m, m + l, pageHeight - m);
  doc.line(m, pageHeight - m, m, pageHeight - m - l);
  // Bottom right
  doc.line(pageWidth - m, pageHeight - m, pageWidth - m - l, pageHeight - m);
  doc.line(pageWidth - m, pageHeight - m, pageWidth - m, pageHeight - m - l);

  // Header banner
  doc.setFillColor(17, 19, 24);
  doc.rect(12, 14, pageWidth - 24, 28, 'F');

  doc.setTextColor(0, 240, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('ASTHRA DEPARTMENT OF INNOVATION // TACTICAL ARCHIVES', 18, 22);

  doc.setTextColor(147, 51, 234);
  doc.setFontSize(8);
  doc.text(`SECURITY LEVEL: ${data.classification.toUpperCase()}`, pageWidth - 18, 22, { align: 'right' });

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text(data.title.toUpperCase(), 18, 34);

  // Metadata Grid
  doc.setTextColor(140, 140, 140);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`ARCHIVE ID: ${data.code}`, 18, 50);
  doc.text(`DATE OF ISSUE: ${data.date}`, 80, 50);
  doc.text(`VOLUME: ${data.volume}`, 140, 50);

  doc.setDrawColor(35, 39, 49);
  doc.line(18, 55, pageWidth - 18, 55);

  // Section 1: Executive Overview
  doc.setTextColor(0, 240, 255);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('I. EXECUTIVE DOSSIER SYNOPSIS', 18, 65);

  doc.setTextColor(220, 220, 220);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const splitSummary = doc.splitTextToSize(data.summary, pageWidth - 36);
  doc.text(splitSummary, 18, 73);

  let currentY = 73 + splitSummary.length * 6 + 10;

  // Section 2: Key Breakthroughs & Directives
  doc.setTextColor(0, 240, 255);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('II. STRATEGIC RESEARCH & DIRECTIVES', 18, currentY);
  currentY += 8;

  data.highlights.forEach((item, index) => {
    doc.setTextColor(0, 240, 255);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`[0${index + 1}]`, 18, currentY);

    doc.setTextColor(230, 230, 230);
    doc.setFont('helvetica', 'normal');
    const splitItem = doc.splitTextToSize(item, pageWidth - 48);
    doc.text(splitItem, 30, currentY);
    currentY += splitItem.length * 6 + 5;
  });

  // Footer stamp
  doc.setDrawColor(0, 240, 255);
  doc.setLineWidth(0.3);
  doc.line(18, pageHeight - 30, pageWidth - 18, pageHeight - 30);

  doc.setFontSize(8);
  doc.setTextColor(140, 140, 140);
  doc.text('ASTHRA HEADQUARTERS // DEPT OF INNOVATION & ENGINEERING', 18, pageHeight - 22);
  doc.text('CONFIDENTIAL INTELLIGENCE DOSSIER // FOR INTERNAL DISTRIBUTION ONLY', 18, pageHeight - 17);
  doc.setTextColor(0, 240, 255);
  doc.text('SYSTEM STATUS: VERIFIED', pageWidth - 18, pageHeight - 20, { align: 'right' });

  // Download PDF
  doc.save(`${data.code.replace(/\s+/g, '_')}_ASTHRA_ARCHIVE.pdf`);
};
