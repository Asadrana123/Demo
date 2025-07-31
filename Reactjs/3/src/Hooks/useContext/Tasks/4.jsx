import React from "react";

// 1. Create the SelectionContext
const SelectionContext = React.createContext();
const ItemListContext = React.createContext();
// 2. Single-file App component that provides context and all UI:
export default function Example4() {
    // Generate a long list of items for demonstration; id is unique, name is visible
    const items = React.useMemo(
        () =>
            Array.from({ length: 1000 }, (_, i) => ({
                id: i + 1,
                name: `Item ${i + 1}`
            })),
        []
    );

    // Manage selection in state and provide setter
    const [selectedId, setSelectedId] = React.useState(null);

    // Provide the context value (object)
    const selectContextValue = React.useMemo(
        () => ({
            selectedId,
            setSelectedId
        }),
        [selectedId]
    );
    const itemValue = React.useMemo(() => ({
        items
    }), [items])
    return (
        <SelectionContext.Provider value={selectContextValue}>
            <ItemListContext.Provider value={itemValue}>
                <h1>🔎 Selection List (Context Example)</h1>
                <div style={{ display: "flex", gap: 24 }}>
                    <div>
                        <ItemList />
                    </div>
                    <div>
                        <ItemDetail />
                    </div>
                </div>
            </ItemListContext.Provider>
        </SelectionContext.Provider>
    );
}

// 3. Renders the list of all items using ItemRow
const ItemList = React.memo(function ItemList() {
    const { items } = React.useContext(ItemListContext);
    const { selectedId, setSelectedId } = React.useContext(SelectionContext);
    console.log('re-render item list');
    return (
        <div>
            <h2>Items:</h2>
            <div style={{ height: 350, overflow: "auto", border: "1px solid #ddd" }}>
                {items?.slice(0, 50).map(item => (
                    // For demo, you can change back to items.map for all items.
                    <ItemRow
                        key={item.id}
                        item={item}
                        isSelected={selectedId === item.id}
                        setSelectedId={setSelectedId}
                    />
                ))}
            </div>
            <div style={{ fontSize: 12, color: "#999" }}>
                (Showing first 50 out of {items.length} items)
            </div>
        </div>
    );
})

// 4. A single item row; re-renders when context.selectedId changes
const ItemRow = React.memo(function ItemRow({ item, isSelectedId, setSelectedId }) {
    console.log('re-render ItemRow')
    // Tracing re-renders:
    React.useEffect(() => {
        // Uncomment line below for debugging render logs
        // console.log(`Row ${item.id} rendered`);
    });

    return (
        <div
            style={{
                padding: "4px 8px",
                cursor: "pointer",
                background: isSelectedId ? "#dcefff" : "transparent",
                fontWeight: isSelectedId ? "bold" : "normal"
            }}
            onClick={() => setSelectedId(item.id)}
        >
            {item.name}
        </div>
    );
});

// 5. Shows details of the currently selected item
function ItemDetail() {
    const { selectedId } = React.useContext(SelectionContext);
    const { items } = React.useContext(ItemListContext);
    const selected = items.find(i => i.id === selectedId);
    if (!selected)
        return (
            <div>
                <h2>Item Detail</h2>
                <em>Select an item to see details</em>
            </div>
        );
    return (
        <div>
            <h2>Item Detail</h2>
            <pre>{JSON.stringify(selected, null, 2)}</pre>
        </div>
    );
}


/*
❓ Your Tasks
What’s wrong with this setup's performance when you select a new item?
Explain how many ItemRow components re-render and why—even though they’re memoized.
Is there a way to make only the affected rows re-render, not all 1000+ ItemRow components?
Propose and describe at least one advanced solution. Consider:
Custom context selectors
Lifting selectedId state higher, or passing as prop
Third-party utilities/hooks
Write a minimal refactor (REAL CODE or PSEUDOCODE) to implement one solution that solves problem #2.
Optional: Discuss trade-offs of your chosen solution (readability, encapsulation, API, etc.)
[Bonus] What new problems might arise if context value is deeply nested or reconstructed on every render?
*/
