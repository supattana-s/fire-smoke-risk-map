import Checklist from "./Checklist";

function ChecklistList({ statuses }) {
    return (
        <div>
            {statuses.map((item) => (
                <Checklist
                    key={item.id}
                    status={item.status}
                    details={item.DetailsChecklist.details}
                />
            ))}
        </div>
    );
}

export default ChecklistList;
