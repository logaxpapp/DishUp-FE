import { Button, Modal } from "antd";
interface Props {
  title: string;
  subTitle: string;
  close: () => void;
  open: boolean;
  className: string;
  action: () => void;
  type?: "noDelete" | "delete";
  actionText: string;
  loading: boolean;
}
const WarningModal = ({
  title,
  subTitle,
  close,
  open,
  className,
  type = "delete",
  action,
  actionText,
  loading,
}: Props) => {
  return (
    <div>
      <Modal
        title={null}
        open={open}
        mask={true}
        onCancel={close}
        className={className}
        style={{
          fontFamily: "Montserrat, sans-serif",
        }}
        // className={"w-[324px] absolute right-[50%] left-[50%] p-2"}
        footer={[
          <div
            className="flex w-full items-center justify-center gap-4 mt-5"
            key="footer"
          >
            <Button
              size="middle"
              key="apply"
              type="primary"
              style={{
                flex: 0.3,
                background: type === "delete" ? "#FF3B3B" : "#2D7DEE",
                color: "white",
                fontSize: "14px",
                fontWeight: 400,
              }}
              loading={loading}
              disabled={loading}
              onClick={action}
            >
              {actionText}
            </Button>

            <Button
              size="middle"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              key="reset"
              type="default"
              onClick={close}
              className="flex-[0.3]  text-[#0D1821] text-[14px] font-[400]"
            >
              Close
            </Button>
          </div>,
        ]}
      >
        <div className="p-1">
          <h3
            className="text-center text-[#0D1821] text-[24px] font-[600]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {title}
          </h3>

          <h3
            className="text-center text-[#0D1821] text-[14px] font-[400] mt-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {subTitle}
          </h3>
        </div>
      </Modal>
    </div>
  );
};

export default WarningModal;
