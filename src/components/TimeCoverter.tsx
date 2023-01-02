import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "../atoms";

function TimeConverter() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) =>
    setMinutes(+event.currentTarget.value);
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) =>
    setHours(+event.currentTarget.value);

  return (
    <div>
      <h1>Time Converter</h1>
      Hours
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="시간"
      />
      Minutes
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="분"
      />
    </div>
  );
}

export default TimeConverter;
