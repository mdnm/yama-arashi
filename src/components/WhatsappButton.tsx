export function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=393516858728"
      target="_blank"
      className="position-fixed text-reset text-decoration-none rounded-circle d-flex justify-content-center align-items-center"
      style={{
        width: "64px",
        height: "64px",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
      }}
      rel="noreferrer"
    >
      <i className="bi bi-whatsapp text-white fs-2"></i>
    </a>
  );
}
