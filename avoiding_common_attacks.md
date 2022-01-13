# Security Measures

## Floating Pragma (SWC-103)
Specific compiler pragma `0.8.10` used in this contract to avoid accidential bugs

## State Variable Default Visibility (SWC-108)

Variables specified as being public , internal or private. Explicitly define visibility for all state variables.

## Authorization through tx.origin (SWC-115)
`tx.origin` should not be used for authorization. Use `msg.sender` instead.
