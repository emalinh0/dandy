import jsPDF from "jspdf";

// program to generate random strings

// declare all characters
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length: number) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export const generateTicketPdf = () => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Set the ticket dimensions and position
  const ticketWidth = 210; // in mm
  const ticketHeight = 100; // in mm
  const ticketMargin = 10; // in mm
  const ticketContentWidth = ticketWidth - 2 * ticketMargin;
  const ticketContentHeight = ticketHeight - 2 * ticketMargin;

  // Define the ticket content
  const eventName = "Gor Mahia vs AFC Leopards";
  const eventDate = "28th May, 2023";
  const eventLocation = "Kasarani Stadium";
  const ticketCode = generateString(8);

  // Set the font size and line height for the ticket content
  const fontSize = 12;
  const lineHeight = 16;

  // Set the QR code size and position
  const qrCodeSize = 50; // in mm
  const qrCodeX = ticketContentWidth - qrCodeSize;
  const qrCodeY = ticketContentHeight - qrCodeSize - lineHeight;

  // Set the ticket header styles
  doc.setFontSize(fontSize + 6);

  // Draw the ticket header
  doc.text(eventName, ticketMargin, ticketMargin + fontSize);
  doc.setFontSize(fontSize);
  doc.text(eventDate, ticketMargin, ticketMargin + 2 * fontSize);
  doc.text(eventLocation, ticketMargin, ticketMargin + 3 * fontSize);

  // Set the ticket code styles
  doc.setFontSize(fontSize + 2);

  // Draw the ticket code
  doc.text("Ticket Code:", ticketMargin, ticketMargin + 5 * fontSize);
  doc.setFontSize(fontSize);
  doc.text(ticketCode, ticketMargin, ticketMargin + 6 * fontSize);

  // Generating QR Code
  const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ticketCode}`;

  // Add the QR code image to the ticket
  doc.addImage(
    qrCodeImage,
    "PNG",
    ticketMargin + qrCodeX,
    ticketMargin + qrCodeY,
    qrCodeSize,
    qrCodeSize
  );

  // Save the ticket as a PDF file
  doc.save("ticket.pdf");
};
